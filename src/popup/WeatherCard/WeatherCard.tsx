import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { OpenWeatherData, fetchOpenWeatherData } from "../../utils/api";

const WeatherCard: React.FC<{
  city: string;
}> = ({ city }) => {
  const [WeatherData, setWeatherData] = useState<OpenWeatherData | null>(null);
  useEffect(() => {
    fetchOpenWeatherData(city)
      .then((data) => setWeatherData(data))
      .catch((err) => console.log(err));
  }, [city]);

  if (!WeatherData) {
    return <div>Loading...</div>;
  }

  return (
    <Box mx={"4px"} my={"16px"}>
      <Card>
        <CardContent>
          <Typography variant="h5">{WeatherData.name}</Typography>
          <Typography variant="body1">
            {Math.round(WeatherData.main.temp)}
          </Typography>
          <Typography variant="body1">
            Feels like: {Math.round(WeatherData.main.feels_like)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherCard;
