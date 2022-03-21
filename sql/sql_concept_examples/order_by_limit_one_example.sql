-- This example will find the first and last name of the last member whoe signed up.

SELECT firstname, surname, joindate FROM cd.members
ORDER BY joindate DESC
LIMIT 1;

-- OR 

SELECT firstname, lastname, joindate FROM cd.members
WHERE joindate = 
    (SELECT MAX(joindate) FROM cd.members);