const declineMonth = (age: number) => {
    if (age > 10 && age < 14) {
        return 'месяцев';
    }

    let unit = age % 10;
    if (unit === 1) {
        return 'месяц';
    }

    if (unit > 1 && unit < 5) {
        return 'месяца';
    }

    if (unit >= 5 || unit === 0) {
        return 'месяцев';
    }
};

export default declineMonth;