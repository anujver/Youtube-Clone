export const API_KEY = 'AIzaSyAPvCKKyip5ooqJ-AzCcYwal2j3oeKrWuA';

export const Value_converter = (value) => {
    if(value >= 1000000)
        {
            return Math.floor(value/1000000)+"M";
        }
        else if (value>=1000)
            {
                return Math.floor(value/1000)+"K";
            }
            else {
                return value;
            }
}