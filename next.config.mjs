const withPWA = (await import("next-pwa")).default({
  dest: "public",
});

const nextConfig = {};

export default withPWA(nextConfig);
