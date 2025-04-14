function task1() {
    let fruits = ["Яблуко", "Апельсин", "Слива"];
    console.log("Завдання 1. Оригінал масив:", fruits);

    fruits.pop();
    console.log("1.1 Видалення останнього:", fruits);

    fruits.unshift("Ананас");
    console.log("1.2 Додавання в початок:", fruits);

    fruits.sort().reverse();
    console.log("1.3 Сортування:", fruits);

    console.log("1.4 Індекс яблука:", fruits.indexOf("Яблуко"));
}

function task2() {
    let colors = ["червоний", "зелений", "синій", "жовтий", "блакитний"];
    console.log("Завдання 2:", colors);

    // let longest = colors.reduce((a, b) => (a.length >= b.length ? a : b));
    // let shortest = colors.reduce((a, b) => (a.length <= b.length ? a : b));

    let longest = colors[0];
    let shortest = colors[0];

    for (let color of colors) {
        if (color.length > longest.length) longest = color;
        if (color.length < shortest.length) shortest = color;
    }

    console.log("Завдання 2.2: Найдовший колір:", longest);
    console.log("Завдання 2.2: Найкоротший колір:", shortest);

    colors = colors.filter(color => color.includes("синій"));
    console.log("Завдання 2.3:", colors);

    console.log("Завдання 2.4:", colors.join(", "));
}

function task3() {
    let employees = [
        { name: "Іван", age: 30, position: "розробник" },
        { name: "Марія", age: 25, position: "дизайнер" },
        { name: "Петро", age: 35, position: "розробник" }
    ];
    console.log("Завдання 3:", employees);

    employees.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Завдання 3.2:", employees);
    let developers = employees.filter(e => e.position === "розробник");
    console.log("Завдання 3.3:", developers);
    employees = employees.filter(e => e.age !== 30);
    console.log("Завдання 3.4:", employees);
    employees.push({ name: "Олександр", age: 28, position: "тестувальник" });
    console.log("Завдання 3.5:", employees);
}

function task4() {
    let students = [
        { name: "Олексій", age: 20, course: 2 },
        { name: "Ірина", age: 22, course: 3 },
        { name: "Андрій", age: 19, course: 1 }
    ];
    students = students.filter(s => s.name !== "Олексій");
    console.log("Завдання 4.2:", students);
    students.push({ name: "Катерина", age: 21, course: 2 });
    console.log("Завдання 4.3:", students);
    students.sort((a, b) => b.age - a.age);
    console.log("Завдання 4.4:", students);
    let thirdCourseStudent = students.find(s => s.course === 3);
    console.log("Завдання 4.5:", thirdCourseStudent);
}

function task5() {
    let numbers = [1, 2, 3, 4, 5];
    console.log("Завдання 5.1:", numbers.map(n => n ** 2));
    console.log("Завдання 5.2:", numbers.filter(n => n % 2 === 0));
    console.log("Завдання 5.3: Сума елементів:", numbers.reduce((a, b) => a + b, 0));
    let extraNumbers = [6, 7, 8, 9, 10];
    numbers = numbers.concat(extraNumbers);
    console.log("Завдання 5.4:", numbers);
    numbers.splice(0, 3);
    console.log("Завдання 5.5:", numbers);
}

function task6() {
    let books = [
        { title: "Книга 1", author: "Автор 1", genre: "Фантастика", pages: 300, isAvailable: true },
        { title: "Книга 2", author: "Автор 2", genre: "Детектив", pages: 250, isAvailable: false }
    ];

    function addBook(title, author, genre, pages) {
        books.push({ title, author, genre, pages, isAvailable: true });
    }

    function removeBook(title) {
        books = books.filter(book => book.title !== title);
    }

    function findBooksByAuthor(author) {
        return books.filter(book => book.author === author);
    }

    function toggleBookAvailability(title, isBorrowed) {
        let book = books.find(book => book.title === title);
        if (book) book.isAvailable = !isBorrowed;
    }

    function sortBooksByPages() {
        books.sort((a, b) => a.pages - b.pages);
    }

    function getBooksStatistics() {
        let availableBooks = books.filter(book => book.isAvailable).length;
        return {
            totalBooks: books.length,
            availableBooks,
            borrowedBooks: books.length - availableBooks,
            averagePages: books.reduce((sum, book) => sum + book.pages, 0) / books.length
        };
    }

    addBook("Книга 3", "Автор 1", "Роман", 320);
    console.log("Завдання 6:", books);
    removeBook("Книга 2");
    console.log("Завдання 6 після видалення:", books);
    console.log("Завдання 6: Книги автора Автор 1:", findBooksByAuthor("Автор 1"));
    toggleBookAvailability("Книга 1", true);
    console.log("Завдання 6 після зміни доступності:", books);
    sortBooksByPages();
    console.log("Завдання 6 після сортування:", books);
    console.log("Завдання 6: Статистика:", getBooksStatistics());
}

function task7() {
    let student = {
        name: "Олег",
        age: 20,
        course: 2
    };
    student.subjects = ["Математика", "Програмування", "Фізика"];
    delete student.age;
    console.log("Завдання 7:", student);
}

task1();
task2();
task3();
task4();
task5();
task6();
task7();



