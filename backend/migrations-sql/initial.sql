-- Creates Database

CREATE TABLE BestMatches (
    id CHAR(36) PRIMARY KEY,
    best TEXT NOT NULL,
    time DATETIME
);

INSERT INTO BestMatches (id, best, time) VALUES
('vcsafvasfgsgsdas',
'url1',
datetime('now')),
('xafsfgsafAQFFAFsd',
'url2',
datetime('now')),
('zxzdcasfsffsf',
'url3',
datetime('now'));


DROP TABLE BestMatches;