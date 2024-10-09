# Visualization Dashboard REST API

## Overview
Welcome to the **Visualization Dashboard REST API**, a seamless basic integration of Angular (v9.1.11) for the frontend and Flask (v2.3.2) for the backend, with MySQL database support. This API provides powerful data visualization solutions to enable users to gain actionable insights and make informed decisions.

## Assignment: Visualization Dashboard Assignment

This project is part of a **self-learning initiative** aimed at enhancing my skills in different technologies, like python, flask.

## API Endpoints

### 1. End Year Filter
Fetch data filtered by the given end year.

- **URL**: `/dashboard/end-year/{value}`
- **Method**: `GET`
- **URL Path Variable**:  
  - `value` = [integer]
  
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: Array of arrays `[[..], [..],[..]]`
  
- **Error Response**:
  - **Code**: `404 NOT FOUND`
  - **Content**:  
    ```json
    {
      "timestamp": "DATETIMESTAMP", 
      "message": "No data found with endyear: [value]", 
      "details": "uri=/dashboard/end-year"
    }
    ```
    
- **Sample Call**:
    ```javascript
    fetch('https://localhost:5000/dashboard/end-year/2023')
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });
    ```

---

### 2. Topic Filter
Fetch data filtered by a specific topic keyword.

- **URL**: `/dashboard/topic/?keyword={value}`
- **Method**: `GET`
- **URL Params**:  
  - `keyword` = [string]
  
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: Array of objects `[{}, {}, {}]`
  
- **Error Response**:
  - **Code**: `404 NOT FOUND`
  - **Content**:  
    ```json
    {
      "timestamp": "DATETIMESTAMP", 
      "message": "No data found with filter: [value]", 
      "details": "uri=/dashboard/topic"
    }
    ```
    
- **Sample Call**:
    ```javascript
    fetch('https://localhost:5000/dashboard/topic?keyword=travel')
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });
    ```

---

### 3. Sector Filter
Fetch data filtered by a specific sector keyword.

- **URL**: `/dashboard/sector/?keyword={value}`
- **Method**: `GET`
- **URL Params**:  
  - `keyword` = [string]

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: Array of objects `[{}, {}, {}]`

- **Error Response**:
  - **Code**: `404 NOT FOUND`
  - **Content**:  
    ```json
    {
      "timestamp": "DATETIMESTAMP", 
      "message": "No data found with sector: [value]", 
      "details": "uri=/dashboard/sector"
    }
    ```
    
- **Sample Call**:
    ```javascript
    fetch('https://localhost:5000/dashboard/sector?keyword=Pharmaceuticals')
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });
    ```

---

### 4. Region Filter
Fetch data filtered by a specific region keyword.

- **URL**: `/dashboard/region?keyword={value}`
- **Method**: `GET`
- **URL Params**:  
  - `keyword` = [string]

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: Array of objects `[{}, {}, {}]`

- **Error Response**:
  - **Code**: `404 NOT FOUND`
  - **Content**:  
    ```json
    {
      "timestamp": "DATETIMESTAMP", 
      "message": "No data found with region: [value]", 
      "details": "uri=/dashboard/region"
    }
    ```
    
- **Sample Call**:
    ```javascript
    fetch('https://localhost:5000/dashboard/region?keyword=Asia')
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });
    ```

---

### 5. Pestle Filter
Fetch data filtered by a specific PESTLE keyword.

- **URL**: `/dashboard/pestle?keyword={value}`
- **Method**: `GET`
- **URL Params**:  
  - `keyword` = [string]

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: Array of objects `[{}, {}, {}]`

- **Error Response**:
  - **Code**: `404 NOT FOUND`
  - **Content**:  
    ```json
    {
      "timestamp": "DATETIMESTAMP", 
      "message": "No data found with pestle: [value]", 
      "details": "uri=/dashboard/pestle"
    }
    ```
    
- **Sample Call**:
    ```javascript
    fetch('https://localhost:5000/dashboard/pestle?keyword=Healthcare')
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });
    ```

---

### 6. Source Filter
Fetch data filtered by a specific source keyword.

- **URL**: `/dashboard/source?keyword={value}`
- **Method**: `GET`
- **URL Params**:  
  - `keyword` = [string]

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: Array of objects `[{}, {}, {}]`

- **Error Response**:
  - **Code**: `404 NOT FOUND`
  - **Content**:  
    ```json
    {
      "timestamp": "DATETIMESTAMP", 
      "message": "No data found with source: [value]", 
      "details": "uri=/dashboard/source"
    }
    ```
    
- **Sample Call**:
    ```javascript
    fetch('https://localhost:5000/dashboard/source?keyword=infosysblogs')
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });
    ```

---

### 7. SWOT Filter
Fetch data filtered by a specific SWOT keyword.

- **URL**: `/dashboard/swot/keyword={value}`
- **Method**: `GET`
- **URL Params**:  
  - `keyword` = [integer]

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: Array of objects `[{}, {}, {}]`

- **Error Response**:
  - **Code**: `404 NOT FOUND`
  - **Content**:  
    ```json
    {
      "timestamp": "DATETIMESTAMP", 
      "message": "No data found with swot: [value]", 
      "details": "uri=/dashboard/swot"
    }
    ```
    
- **Sample Call**:
    ```javascript
    fetch('https://localhost:5000/dashboard/swot?keyword=Strength')
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });
    ```

---

### 8. Country Filter
Fetch data filtered by a specific country keyword.

- **URL**: `/dashboard/country?keyword={value}`
- **Method**: `GET`
- **URL Params**:  
  - `keyword` = [integer]

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: Array of objects `[{}, {}, {}]`

- **Error Response**:
  - **Code**: `404 NOT FOUND`
  - **Content**:  
    ```json
    {
      "timestamp": "DATETIMESTAMP", 
      "message": "No data found with country: [value]", 
      "details": "uri=/dashboard/country"
    }
    ```
    
- **Sample Call**:
    ```javascript
    fetch('https://localhost:5000/dashboard/country?keyword=India')
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });
    ```

---

### 9. City Filter
Fetch data filtered by a specific city keyword.

- **URL**: `/dashboard/city?keyword={value}`
- **Method**: `GET`
- **URL Params**:  
  - `keyword` = [string]

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**: Array of objects `[{}, {}, {}]`

- **Error Response**:
  - **Code**: `404 NOT FOUND`
  - **Content**:  
    ```json
    {
      "timestamp": "DATETIMESTAMP", 
      "message": "No data found with city: [value]", 
      "details": "uri=/dashboard/city"
    }
    ```
    
- **Sample Call**:
    ```javascript
    fetch('https://localhost:5000/dashboard/city?keyword=lucknow')
    .then(response => response.json())
    .then(data => { console.log(data); })
    .catch(error => { console.error(error); });
    ```

---
