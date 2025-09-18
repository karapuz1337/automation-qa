// Generate random average grade between 0 and 100
const averageGrade = Math.floor(Math.random() * 100)
// Student grade calculation using switch (same handling as task1.js)
// Check if it is a number
switch (typeof averageGrade){
    case "number":
        switch(true){
            // Check if it is between 0 and 100
            case (averageGrade < 0 || averageGrade > 100):
                throw new Error("Середня оцінка має бути від 0 до 100")
            // Determine grade level
            case (averageGrade >= 91):
                console.log("Відмінно")
                break;
            case (averageGrade >= 81):
                console.log("Дуже добре")
                break;
            case (averageGrade >= 71):
                console.log("Добре")
                break;
            case (averageGrade >= 60):
                console.log("Задовільно")
                break;
            default:
                console.log("Незадовільно")
        }
    break;
    default:
        throw new Error("Середня оцінка має бути числом")
}
