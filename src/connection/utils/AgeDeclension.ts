const declineAge = (age: number) => {
    let unit = age % 10;
    if (unit === 1) {
        return 'год';
    }

    if (unit > 1 && unit < 5) {
        return 'года';
    }

    if (unit >= 5 || unit === 0) {
        return 'лет';
    }
};

export default declineAge;