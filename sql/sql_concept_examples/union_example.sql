-- This will retrieve a table with one column. It combines the surname column in the memebers table and the name column in the fcailities table. 


SELECT surname FROM cd.members
UNION
SELECT name FROM cd.facilities;