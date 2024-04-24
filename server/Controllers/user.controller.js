const User = require("../Models/user.model");

const getUserProfileandRepos = async (req, res) => {
  try {
    const { username } = req.params;
    console.log("username: ", username);
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.TOKEN}`,
      },
    });

    const userProfile = await userRes.json();

    const repoResponse = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          authorization: `token ${process.env.TOKEN}`,
        },
      }
    );

    const repos = await repoResponse.json();

    res.status(200).send({ userProfile, repos });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const likeProfile = async (req, res) => {
  try {
    const { username } = req.params;
    console.log("username ", username);
    const user = await User.findById(req.user._id.toString());
    console.log(user, "auth user");
    const userToLike = await User.findOne({ username });

    if (!userToLike) {
      return res.status(404).json({ error: "User is not a member" });
    }

    if (user.likedProfiles.includes(userToLike.username)) {
      return res.status(400).json({ error: "User already liked" });
    }

    userToLike.likedBy.push({
      username: user.username,
      avatarUrl: user.avatarUrl,
      likedDate: Date.now(),
    });
    user.likedProfiles.push(userToLike.username);

    // await userToLike.save();
    // await user.save();
    await Promise.all([userToLike.save(), user.save()]);

    res.status(200).json({ message: "User liked" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLikes = async (req, res) => {
  try {
    const user = await User.findById(req.user._id.toString());
    res.status(200).json({ likedBy: user.likedBy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { getUserProfileandRepos, likeProfile, getLikes };
