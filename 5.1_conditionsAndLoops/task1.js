// Generate random average grade between 0 and 100
const averageGrade = Math.floor(Math.random() * 100)
// Student grade calculation using if/else
// Check if it is a number
if (typeof averageGrade === "number") {
    // Check if it is between 0 and 100
    if (averageGrade < 0 || averageGrade > 100) {
        throw new Error("Середня оцінка має бути від 0 до 100")
    } else{
        {
            // Determine grade level
            if (averageGrade >= 91) {
                console.log("Відмінно")
            } else if (averageGrade >= 81) {
                console.log("Дуже добре")
            } else if (averageGrade >= 71) {
                console.log("Добре")
            } else if (averageGrade >= 60) {
                console.log("Задовільно")
            } else {
                console.log("Незадовільно")
            }
        }
    }
}
else{
    throw new Error("Середня оцінка має бути числом")
}
