// next.config.js
module.exports = {
  images: {
    domains: ["scontent.fcrk1-5.fna.fbcdn.net"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "scontent.fcrk1-5.fna.fbcdn.net",
      port: "",
      pathname: "/v/t39.30808-1/**",
    },
  ],
};

