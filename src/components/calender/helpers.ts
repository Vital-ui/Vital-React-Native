export const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

export const getDays = (date: Date) => {
    switch (date.getMonth()) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 0:
            return 31;
        case 2:
            const temp = date;
            temp.setDate(1);
            temp.setDate(temp.getDate() - 1);
            return temp.getDate();
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
    }
    return null;
}; 