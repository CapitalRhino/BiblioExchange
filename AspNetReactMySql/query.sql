USE BiblioExchange;
INSERT INTO Books VALUES
(1,'Harry Potter','J. K. Rowling',1997,'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/04/Harry-Potter-1.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5'),
(2,'Hyperion','Dan Simmons',1989,'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405546838i/77566.jpg'),
(3,'Maze Runner','James Dashner',1972,'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecyclemefree.org%2Fimg%2Fthe-maze-runner-film-series-4.jpg&f=1&nofb=1'),
(4,N'Под игото',N'Иван Вазов',1894,'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Jh-OzroMkL75K2GJRtM9FAHaLH%26pid%3DApi&f=1')

use BiblioExchange
TRUNCATE TABLE Books
SELECT * from Books