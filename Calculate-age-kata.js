function getAges(sum,difference){
return (sum == difference && sum >= 0) ? [sum, 0] : (sum <= difference || sum < 0 || difference < 0) ? null : [(sum + difference)/2,(sum - difference)/2];
};
