# Project Kashy Website

## Tasks:

- [x] Apply the working database to this repo
- [x] Establish connection with the database
- [x] (Test) Retrieve data from the database's `workrequest` table
- [x] Process user's input data
  - [x] Separate the user's full name into first name and last name
  - [x] Store service choice as text, rather than its id
  - [x] Store comments to its full length
- [x] Add the user's data into the `workrequest` table
- [x] Notify Kashy/the customer that the data has been successfully added to the table
- [x] Combine current work with Daniel's to send an email only if the data is successfully added
- [ ] Secure the backend to the AWS/SQL database
  - [ ] Implement rate limit for all requests made to the database
  - [ ] Implement basic authorisation in case anyone wants to access the server side of the application
- [x] (Diagnostic) Delete data from the database's `workrequest` table

## Notes:

- Set up the `.env` file using the **DevSetupGuide.pdf** file in the OneDrive folder every time this repo is cloned.

- Add the `.env` file into `.gitignore` file.

- Create a new `.env` file every time the repository is cloned using the info in the `DevSetupGuide.pdf` file, which includes
  + AWS_HOST
  + AWS_USER
  + AWS_PASS
  + AWS_DB
  
- Directory of `server.ts` is `./src/backend/server/src`.

- Remember to install both `nodemon` and `ts-node` before running the server.