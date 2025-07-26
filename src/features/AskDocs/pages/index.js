import React, { useState } from "react";
// import Layout from "../components/common/Layout";
// import DocumentUpload from "../components/upload/DocumentUpload";
// import ChatInterface from "../components/chat/ChatInterface";

export default function Home() {
  const [documentData, setDocumentData] = useState(null);

  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AskDocs AI</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload documents and ask questions using advanced RAG and LLMs
          </p>
        </div>

        {!documentData ? (
          <DocumentUpload onUploadSuccess={setDocumentData} />
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">
                Chat with your document
              </h2>
              <button
                onClick={() => setDocumentData(null)}
                className="px-4 py-2 text-blue-600 hover:text-blue-700"
              >
                Upload new document
              </button>
            </div>
            <ChatInterface documentData={documentData} />
          </div>
        )}
      </div>
    </Layout>
  );
}
