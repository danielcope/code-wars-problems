-- This example will get the signup date of the last member

SELECT MAX(joindate) AS latest FROM cd.members;