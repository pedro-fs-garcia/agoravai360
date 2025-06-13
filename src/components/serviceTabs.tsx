import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import PortfolioCard from "./PortfolioCard";
import { motion } from "framer-motion";
import { Award, ExternalLink, Eye, TrendingUp } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "Todos", icon: <Award className="h-4 w-4" /> },
  { id: "sites", label: "Sites", icon: <ExternalLink className="h-4 w-4" /> },
  { id: "marketing", label: "Marketing Digital", icon: <TrendingUp className="h-4 w-4" /> },
  { id: "seo", label: "SEO", icon: <Eye className="h-4 w-4" /> },
]



export default function ServiceTabs() {
    const [activeTab, setActiveTab] = useState("all")
    
    return (
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <motion.div
                className="flex justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            >
                <TabsList className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 p-1 rounded-xl">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TabsTrigger
                                value={category.id}
                                className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-yellow-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-amber-500 data-[state=active]:text-slate-900 data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/25 transition-all duration-300 rounded-lg font-medium"
                            >
                                {category.icon}
                                <span>{category.label}</span>
                            </TabsTrigger>
                        </motion.div>
                    ))}
                </TabsList>
            </motion.div>
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                <motion.div
                    className="flex justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <TabsList className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 p-1 rounded-xl">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <TabsTrigger
                                    value={category.id}
                                    className="flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-yellow-400 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-amber-500 data-[state=active]:text-slate-900 data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/25 transition-all duration-300 rounded-lg font-medium"
                                >
                                    {category.icon}
                                    <span>{category.label}</span>
                                </TabsTrigger>
                            </motion.div>
                        ))}
                    </TabsList>
                </motion.div>

                {categories.map((category) => (
                    <TabsContent key={category.id} value={category.id} className="mt-0">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <PortfolioCard project={project} index={index} />
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </Tabs>
    )
}