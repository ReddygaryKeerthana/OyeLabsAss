// Write a sql query for finding the subjects for each

SELECT
 CUSTOMERS.customerid,
  CUSTOMERS.name,
  (
    SELECT
      (SUBJECTS.subjectName)
    FROM
      SUBJECTS
      INNER JOIN SUBJECT_STUDENT_MAPPING AS ssm ON ssm.subjectid = SUBJECTS.subjectid
    WHERE
      ssm.customerid = CUSTOMERS.customerid
    ORDER BY
      SUBJECTS.subjectName
 ) AS SUBJECT
FROM
  CUSTOMERS;