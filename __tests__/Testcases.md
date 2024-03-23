###createProduct Test Cases
-Test that a new product is created with valid data.
    -Test that a 400 error is returned with missing data.
updateProduct Test Cases
Test that an existing product is updated with valid data.
Test that a 404 error is returned with an invalid product ID.
deleteProduct Test Cases
Test that an existing product is deleted and valid data is returned.
Test that a 404 error is returned with an invalid product ID.
findProduct Test Cases
Test that an existing product is fetched and valid data is returned.
Test that a 404 error is returned with an invalid product ID.


1.    **createProduct Test Cases**
        - **Valid Data:**
            -   **Description**: Test that a new product is created with valid data
            -   **Test Cases**: 
                -   Test that a new product is created with valid data and returns the 201 status and createdProduct data
                -   Test that a 400 error is returned with missing data
                
2.    **updateProduct Test Cases**
        - **Valid Data:**
            -   **Description**: Test that a updated product is edited with valid data
            -   **Test Cases**: 
                -   Test that a existing product is updated with valid data and returns the 200 status and updatedProduct data
                -   Test that a 404 error is returned with an invalid or non-existed product ID.
                
                
                
3.    **deleteProduct Test Cases**
        - **Valid Data:**
            -   **Description**: Test that product is valid, then it's get deleted.
            -   **Test Cases**: 
                -   Test that a existing product is deleted and returns the 200 status and deletedProduct data
                -   Test that a 404 error is returned with an invalid or non-existed product ID.
                
                
                
4.    **findProduct Test Cases**
        - **Valid Data:**
            -   **Description**: Test that retrieve all the products and individual product
            -   **Test Cases**: 
                -   Test that a existing product is retrieved and returns the 200 status and product data
                -   Test that return product array  when no product id provided 
                -   Test that a 404 error is returned with an invalid or non-existed product ID.
                
                
