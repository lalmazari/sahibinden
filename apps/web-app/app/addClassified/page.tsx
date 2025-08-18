import React from 'react'

const AddClassified = () => {
  return (
    <>
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Add New Classified</h1>
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                type="text"
                placeholder="Enter title"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                placeholder="Enter description"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                type="number"
                placeholder="Enter price"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
                Submit
            </button>
            </form>
        </div>
    </>
  )
}

export default AddClassified