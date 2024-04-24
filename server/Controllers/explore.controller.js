const explorePopularRepos = async (req, res) => {
  try {
    // 5000 requests per hour for authenticated requests
    const { language } = req.params;
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          authorization: `token ${process.env.TOKEN}`,
        },
      }
    );
    const data = await response.json();
    console.log("data: ", data);
    res.status(200).json({ repos: data.items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { explorePopularRepos };
