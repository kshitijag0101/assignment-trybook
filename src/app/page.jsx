import Head from "next/head";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-900 text-[#e2e8f0] flex justify-center items-center p-6">
            <Head>
                <title>API Pricing</title>
            </Head>
            <div className="max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg border border-[#334155]">
                <h1 className="text-2xl text-[#a5b4fc] font-bold mb-1 pt-5 text-left">
                    API Pricing
                </h1>
                <p className="mb-6 text-left font-normal">
                    Our API pricing is based on the model used and the number of
                    tokens processed. Here's a breakdown of the costs:
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-700">
                    <table className="table-auto w-full border-collapse border rounded-md border-gray-700">
                        <thead>
                            <tr className="bg-[#6366f1] text-white">
                                <th className="px-4 py-4 text-left text-sm font-semibold border border-gray-700">
                                    API
                                </th>
                                <th className="px-4 py-4 text-left text-sm font-semibold border border-gray-700">
                                    Model
                                </th>
                                <th className="px-4 py-4 text-left text-sm font-semibold border border-gray-700">
                                    Price per 1K Tokens
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-4 border border-gray-700">
                                    OpenAI
                                </td>
                                <td className="px-4 py-4 border border-gray-700">
                                    GPT-3.5
                                </td>
                                <td className="px-4 py-4 border border-gray-700">
                                    $0.002
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 border border-gray-700">
                                    OpenAI
                                </td>
                                <td className="px-4 py-4 border border-gray-700">
                                    GPT-4
                                </td>
                                <td className="px-4 py-4 border border-gray-700">
                                    $0.03
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 border border-gray-700">
                                    Together AI
                                </td>
                                <td className="px-4 py-4 border border-gray-700">
                                    Llama-2-70b
                                </td>
                                <td className="px-4 py-4 border border-gray-700">
                                    $0.0008
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 border border-gray-700">
                                    Together AI
                                </td>
                                <td className="px-4 py-4 border border-gray-700">
                                    Llama-2-13b
                                </td>
                                <td className="px-4 py-4 border border-gray-700">
                                    $0.0006
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl text-[#a5b4fc] font-semibold ">
                        Token Estimation
                    </h2>
                    <p className="mb-5 font-normal">
                        On average, 1 token is approximately 4 characters or
                        0.75 words. For precise pricing, we recommend using our
                        token calculator tool.
                    </p>
                    <h2 className="text-xl text-[#a5b4fc] font-semibold">
                        Billing
                    </h2>
                    <p className="font-normal">
                        You will only be charged for the tokens used in
                        generating the book. The API tracks token usage and
                        bills accordingly. Detailed usage reports are available
                        in your account dashboard.
                    </p>
                </div>
            </div>
        </div>
    );
}
