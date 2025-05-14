export const makeDate = (date?: string): Date => {
    const newDate = date ? new Date(date): new Date();
    newDate.setHours(newDate.getHours() + 3);
    return newDate;
}