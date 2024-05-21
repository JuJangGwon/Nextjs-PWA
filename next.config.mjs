const withPWA = (await import("next-pwa")).default({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: false,
};

export default withPWA(nextConfig);
