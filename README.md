# Assessment Review

## Strucutre to the approach

The given assessment has been broken down into the following stages: 
  
  1) Creating a user account
  2) Validaing credentials upon Login
  3) Hashing the password when creating an account
  4) Making sure that a valid email is entered
  5) Making sure the user verify's their password before persisting/hashing takes place
  6) Creating an account with a unique username and password
  7) Merging items into the project
  8) CRUD for items with valid login
  9) Dockerizing the application
  
  Due to some **Issues** that occured some stages were left and were looking at again after doing another part of the project
  
  ## Unresolved stages
  
  The following stages are **not completed** due the following reasons: 
  
  2) Validating password upon Login
      - Comparing hashed password to an entered one was unsuccessful
      - Validation is used for username and email to still ensure two-step verification   
  6) Creating an account with a unique username and password
      - If a valid account was created the process kept getting caught in an unknown promise and remained unresolved
      - However, if an account was to be made with a pre-existing accounts details the process worked as required
      
  8) CRUD for items with valid login
      - For creating a new item to the database everything works as expected however when the post is successful the defined 404 error is thrown back
      - Delete and upadte were not added due to time constraints trying to solve the above issues
  9) Dockerizing the application
      - Due to the above issues there was not enough time to dockerize the project
  
