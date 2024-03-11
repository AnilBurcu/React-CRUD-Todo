const formatDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-EN", {
        month: "long",
        day: "numeric",
    });
};

export default formatDate;