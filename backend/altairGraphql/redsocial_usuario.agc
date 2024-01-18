{"version":1,"type":"collection","title":"RedSocial-Usuario","queries":[{"version":1,"type":"window","query":"mutation {\n  updatePassword(userId: \"6550a029a4a5ae875a06ee5d\", newPassword: \"pepeelguapo\") {\n    id\n    email\n  }\n}\n","apiUrl":"http://localhost:3000/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"Update Password User","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"63b9aff6-ba32-444b-ab5b-a9a9bdea257e","created_at":1699783760936,"updated_at":1705558149498},{"version":1,"type":"window","query":"\nmutation {\n  updateEmail(userId: \"65a8aef2f7af15d37c03a157\", newEmail: \"update@hot.com\") {\n    id\n    email\n  }\n}\n","apiUrl":"http://localhost:3000/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"Update Email User","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"1de7967d-e3ed-427f-9876-ed91c5dd2a00","created_at":1699783766680,"updated_at":1705558119215},{"version":1,"type":"window","query":"mutation {\n  deleteUser(id: \"65509fff9eefe6464c4e5ed9\")\n}\n","apiUrl":"http://localhost:3000/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"Delete id User","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"032cade8-32f7-4a43-89bc-b5bd896b9381","created_at":1699783926351,"updated_at":1699784550709},{"version":1,"type":"window","query":"\n{\n  users(includeSoftDeleted: true) {\n    id\n    email\n    fullname\n    age\n    posts {\n      id\n      title\n      content\n      likes\n      userId\n      active\n      createdAt\n      updatedAt\n      deletedAt\n    }\n    active\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n","apiUrl":"http://localhost:3000/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"Get All Users","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"b2634bbf-1786-4e10-9be1-576181ddc12f","created_at":1699783658564,"updated_at":1705560654535},{"version":1,"type":"window","query":"{\n  userById(id: \"65a8b1f468e79dda8ce6a19f\") {\n    id\n    email\n    fullname\n    age\n    posts {\n      id\n      title\n      content\n      likes\n      userId\n      active\n      createdAt\n      updatedAt\n      deletedAt\n    }\n    active\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n","apiUrl":"http://localhost:3000/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"Get One Id User","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"674d42f9-3d50-4079-b93b-e02860d932de","created_at":1699783709955,"updated_at":1705559563361},{"version":1,"type":"window","query":"\n{\n  userByEmail(email: \"edgar@hotmail.com\") {\n    id\n    email\n    fullname\n    age\n    posts\n    active\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n","apiUrl":"http://localhost:3000/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"Get One Email Users","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"98c8c806-137e-4f8e-bca9-d7d1a63e1f2f","created_at":1699783740959,"updated_at":1705558063474},{"version":1,"type":"window","query":"mutation {\n  registerUser(\n    createUserDto: { email: \"edgar1@hotmail.com\", password: \"Qazwsxx2\", fullname: \"edgar quintero\", age: 44 }\n  ) {\n    id\n    email\n    fullname\n    age\n    active\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n","apiUrl":"http://localhost:3000/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"Registro User","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"f04436fb-50df-41c7-87a0-d147b6499421","created_at":1699887062665,"updated_at":1705561652053},{"version":1,"type":"window","query":"query loginUser($email: String!, $password: String!) {\n  loginUser(loginUserDto: { email: $email, password: $password })\n}","apiUrl":"http://localhost:3000/graphql","variables":"{\n  \"email\": \"edgar@hotmail.com\",\n  \"password\": \"Qazwsxx2\"\n}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"Login User","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"8dc94938-9e92-4513-a06a-31e51efdb2dd","created_at":1699783773140,"updated_at":1705558177053},{"version":1,"type":"window","query":"mutation {\n  updateUserActive(id: \"65a8b1f468e79dda8ce6a19f\", active: false) {\n    id\n    email\n    fullname\n    age\n    posts\n    active\n    createdAt\n    updatedAt\n    deletedAt\n  }\n}\n","apiUrl":"http://localhost:3000/graphql","variables":"{}","subscriptionUrl":"","subscriptionConnectionParams":"{}","headers":[{"key":"","value":"","enabled":true}],"windowName":"User Active/Inactive","preRequestScript":"","preRequestScriptEnabled":false,"postRequestScript":"","postRequestScriptEnabled":false,"id":"17c96e6c-93f0-4035-b4ba-99b5d447c0a9","created_at":1699784897975,"updated_at":1705558093780}],"preRequest":{"script":"","enabled":false},"postRequest":{"script":"","enabled":false},"id":"f7354496-bb54-4b12-93e3-93e20c05ea87","parentPath":"","created_at":1699783658540,"updated_at":1705552580444,"collections":[]}