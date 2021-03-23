class Author{
    authorId;
    authorName;
    age;
    qualification;

    getAuthorId() {
		return this.authorId;
	}

	setAuthorId(authorId) {
		this.authorId = authorId;
	}

    getAuthorName() {
		return this.authorName;
	}

	setAuthorName(authorName) {
		this.authorName = authorName;
	}

    getAge() {
		return this.age;
	}

	setAge(age) {
		this.age = age;
	}

    getQualification() {
		return this.qualification;
	}

	setQualification(qualification) {
		this.qualification = qualification;
	}
 
}

class Genre {
    genreId;
    genreName;

    getGenreId() {
		return this.genreId;
	}

	setGenreId(genreId) {
		this.genreId = genreId;
	}


    getGenreName() {
		return this.genreName;
	}

	setGenreName(namgenreNamee) {
		this.genreName = genreName;
	}

}

class PublicationCompany {
    pid;
    pname;
    paddress;

    getPid() {
		return this.pid;
	}

	setPid(pid) {
		this.pid = pid;
	}


    getPname() {
		return this.pname;
	}

	setPname(pname) {
		this.pname = pname;
	}

    getPaddress() {
		return this.paddress;
	}

	setPaddress(paddress) {
		this.paddress = paddress;
	}

}


class Book extends Author{
    sno;
    title;
    

    getSno() {
		return this.sno;
	}

	setSno(sno) {
		this.sno = sno;
	}    
    
    getTitle() {
		return this.title;
	}

	setTitle(title) {
		this.title = title;
	}    
    
}




class LibraryBranch extends Book  {
    branchId;
    branchName;
    bookShelf;
    bookSlot;

    getBranchId() {
		return this.branchId;
	}

	setBranchId(branchId) {
		this.branchId = branchId;
	}


    getBranchName() {
		return this.branchName;
	}

	setBranchName(branchName) {
		this.branchName = branchName;
	}

    getBookShelf() {
		return this.bookShelf;
	}

	setBookShelf(bookShelf) {
		this.bookShelf = bookShelf;
	}

    getBookSlot() {
		return this.bookSlot;
	}

	setBookSlot(bookSlot) {
		this.bookSlot = bookSlot;
	}

}

console.log("Welcome to Library Management System");
const book = new Book();
book.setSno(1);
book.setTitle("Jungle Book");

console.log("Book:");
console.log(book.getSno() + "  :  " + book.getTitle());



