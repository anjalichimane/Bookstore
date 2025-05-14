// import Book from "../model/book.model.js";

// export const getBook = async(req, res) => {
//     try {
//         const book = await Book.find();
//         res.status(200).json(book);
//     } catch (error) {
//         console.log("Error: ", error);
//         res.status(500).json(error);
//     }
// };


import Book from "../model/book.model.js";

// Get all books
export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

// Search books
export const searchBooks = async (req, res) => {
  const query = req.query.query;

  try {
    const regex = new RegExp(query, "i"); // case-insensitive regex
    const books = await Book.find({
      $or: [
        { title: { $regex: regex } },
        { author: { $regex: regex } },
        { description: { $regex: regex } },
      ],
    });

    res.status(200).json(books);
  } catch (error) {
    console.log("Search Error: ", error);
    res.status(500).json({ message: "Search failed", error: error.message });
  }
};
