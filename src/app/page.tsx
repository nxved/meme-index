"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts"
import { ErrorBoundary } from "react-error-boundary"

const tokenomicsData = [
  { name: "Treasury", value: 77.27, amount: "85,000,000,000" },
  { name: "Ecosystem", value: 13.64, amount: "15,000,000,000" },
  { name: "Liquidity", value: 9.09, amount: "10,000,000,000" },
]

const fundingRoundsData = [
  { name: "Pre-Seed", tokens: 5000000000, price: 0.0001, raise: 500000 },
  { name: "Seed", tokens: 40000000000, price: 0.0001, raise: 4000000 },
  { name: "Series A", tokens: 20000000000, price: 0.00015, raise: 3000000 },
  { name: "Series B", tokens: 20000000000, price: 0.00019, raise: 3800000 },
]

const COLORS = ["#845EF7", "#FF6B6B", "#4C6EF5", "#51CF66"]

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="text-white text-center">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function Home() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="min-h-screen bg-gradient-to-b from-purple-600 via-purple-500 to-purple-700">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-rainbow-gradient opacity-50" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center"
          >
            <img
              src="/meme-vault-front.png"
              alt="Meme Vault Logo"
              className="w-80 h-80 mx-auto mb-8 mt-8"
            />
            <h1 className="text-6xl font-bold text-white mb-4 pixel-font">MEME VAULT</h1>
            <p className="text-2xl text-white mb-8 retro-font">THE 1000X FUND</p>
            <div
              className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full text-lg bungee-font"
            >
              Coming Soon...
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6 bungee-font">Ride the Meme Super Cycle</h2>
              <p className="text-xl text-white/90 retro-font">
                Welcome to Meme Vault, the first-ever Meme Index Fund (MIF), designed to capture the explosive growth of the meme
                coin super cycle. We are here to democratise meme coin investing, delivering sophisticated strategies for redacted assets.
              </p>
            </motion.div>

            {/* Core Product Section */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center bungee-font">Core Product: Meme Index Fund (MIF)</h3>
              <div className="text-white/90 retro-font">
                <p className="mb-4">
                  The Meme Vault Meme Index Fund (MIF) is our flagship product, offering exposure to the top-performing meme coins in one convenient token.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Curated portfolio of top meme coins</li>
                  <li>Automated portfolio rebalancing</li>
                  <li>Exposure to blue chip memes, trench gems, and 1000x vaporware</li>
                </ul>
                <p>
                  Our team of seasoned meme coin investors and financial strategists ensures that we capture the best opportunities the market offers, while our unique surge pricing and redemption system protects our holders and the community.
                </p>
              </div>
            </Card>

            {/* $MV Token Section */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center bungee-font">$MV Token</h3>
              <div className="text-white/90 retro-font">
                <p className="mb-4">
                  The $MV token is the native token of the Meme Vault ecosystem, allowing investors to share in the profits of the Meme Index Fund.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Represents ownership in the Meme Index Fund</li>
                  <li>Tradable on open markets</li>
                  <li>Can be redeemed for underlying assets in the fund</li>
                  <li>Protected by Surge Pricing mechanism</li>
                </ul>
                <p>
                  The value of $MV is pegged to the Net Asset Value (NAV) of the fund, ensuring that your tokens worth is always backed by the meme coins held in the MemeVault Fund.
                </p>
              </div>
            </Card>

            {/* Tokenomics Chart */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg rounded-xl mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center bungee-font">Tokenomics</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  {tokenomicsData && tokenomicsData.length > 0 ? (
                    <PieChart>
                      <Pie
                        data={tokenomicsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {tokenomicsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-white">No data available</p>
                    </div>
                  )}
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {tokenomicsData && tokenomicsData.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-white font-bold bangers-font">{item.name}</div>
                    <div className="text-white/80 retro-font">{item.value}%</div>
                    <div className="text-sm text-white/60 retro-font">{item.amount}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Funding Rounds */}
            <Card className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center bungee-font">Funding Rounds</h3>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={fundingRoundsData}>
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="tokens" fill="#845EF7" name="Tokens" />
                    <Bar dataKey="raise" fill="#FF6B6B" name="Raise ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-6">
                {fundingRoundsData.map((round, index) => (
                  <div key={index} className="text-center">
                    <div className="text-white font-bold bangers-font">{round.name}</div>
                    <div className="text-white/80 retro-font">{round.tokens.toLocaleString()} tokens</div>
                    <div className="text-sm text-white/60 retro-font">${round.price} per token</div>
                    <div className="text-sm text-white/60 retro-font">${round.raise.toLocaleString()} raised</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-purple-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center bungee-font">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Decentralised Asset Management",
                  description: "Powered by a DAO for community-driven decisions",
                },
                {
                  title: "Surge Pricing Protection",
                  description: "Prevents harmful sell-offs during volatile market moments",
                },
                {
                  title: "No KYC Required",
                  description: "Pure decentralisation for maximum privacy",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="p-6 bg-white/10 backdrop-blur-lg rounded-xl h-full">
                    <h3 className="text-xl font-bold text-white mb-4 bangers-font">{feature.title}</h3>
                    <p className="text-white/80 retro-font">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center bungee-font">More About Meme Vault</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4 bangers-font">Investment Strategy</h3>
                <ul className="list-disc list-inside text-white/80 retro-font">
                  <li>Blue Chip Memes – Stable meme coins</li>
                  <li>Trench Gems – Those golden nuggets of glory</li>
                  <li>1000x Vaporware – The insane plays with wild risk and even wilder potential</li>
                </ul>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-lg rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4 bangers-font">Redemptions and Surge Pricing</h3>
                <p className="text-white/80 retro-font">
                  Meme Vault implements Surge Pricing, a dynamic redemption fee that varies based on demand. This protects the funds value and discourages mass redemptions during high-demand periods.
                </p>
              </Card>
            </div>
            <section className="relative py-8 flex items-center justify-center overflow-hidden">
              <a
                href="https://jineshsurana420s-organization.gitbook.io/memevault/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full text-lg bungee-font"
              >
                Whitepaper
              </a>
            </section>

          </div>
        </section>
      </main>
    </ErrorBoundary>
  )
}

