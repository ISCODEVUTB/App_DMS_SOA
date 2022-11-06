CREATE DATABASE IF NOT EXISTS api_inventario;

USE api_inventario;

CREATE TABLE inventario (
      id VARCHAR(45) NOT NULL,
      title VARCHAR(45) NOT NULL,
      author VARCHAR(45) NOT NULL,
      category VARCHAR(45) NULL,
      detail TEXT(300) NOT NULL,
      amount INT NULL,
      purchase_price FLOAT NOT NULL,
      sale_price FLOAT NOT NULL,
      PRIMARY KEY (id)
);

INSERT INTO inventario VALUES
 ('ED123', 'Harry', 'Anoni', 'Libro', 'El libro de harry potter...', 4, 12400, 25000),
 ('ABC123', 'Cálculo', 'Edgar', 'Libro', 'Calculo para fagsdgjksnhgjksghkjsbgk', 2, 30000, 50400),
 ('DEF123', 'Harry Potter', 'Anoni', 'Pelicula', 'sdhfuihasdufisbdnfjksbusidf', 2, 34200, 56000),
 ('GHI123', 'La sombra', 'Alguien', 'Audiolibro', 'uyuiwhjkdsfhsuih', 3, 12000, 20000);


