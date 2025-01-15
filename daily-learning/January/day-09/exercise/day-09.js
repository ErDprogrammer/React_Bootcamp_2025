const library = [
    { title: "The Alchemist", author: "Paulo Coelho", available: true },
    { title: "1984", author: "George Orwell", available: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", available: false }
  ];
  
  library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true });
  
  const availableBooks = library.filter(book => book.available);
  
  const bookByTitle = library.find(book => book.title === "The Alchemist");
  
  const borrowBookTitle = "1984";
  library.forEach(book => {
    if (book.title === borrowBookTitle) {
      book.available = false;
    }
  });
  
  const bookDetails = library.map(book => `${book.title} by ${book.author}`);
  
  console.log("Updated Library:", library);
  console.log("Available Books:", availableBooks);
  console.log("Book By Title:", bookByTitle);
  console.log("Book Details:", bookDetails);
  