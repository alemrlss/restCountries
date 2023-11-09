import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import "../index.css";

function InfoCard() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fail, setFail] = useState(false);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    setLoading(true);
    let api = helpHttp();
    api
      .get(`https://restcountries.com/v3.1/name/${params.countryName}`)
      .then((res) => {
        setData(res[0]);
        setLoading(false);
      })
      .catch(setFail(true));
  }, []);

  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");
  }

  setTimeout(() => {
    if (fail && !data) {
      return <div>RUTA INVALIDA</div>;
    }
  }, 2000);

  return (
    <div className="h-screen dark:bg-slate-700">
      {loading && <Loader />}
      {data && (
        <div className="flex flex-col pt-10 sm:pt-20 space-y-4 sm:space-y-4">
          <div className="flex">
            <Link className="sm:mx-20 text-5xl sm:mb-5 dark:text-white" to={"/"}>
              <BsArrowLeftCircleFill />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row dark:text-white">
            <div className="img-infoCard flex-1">
              {" "}
              <img
                className="sm:ml-20 sm:mx-0  img-countries"
                src={data.flags.png}
                alt={data.name.common}
                width="600px"
                height="600px"
              />
            </div>

            <div className="text-infoCard flex-1 flex sm:ml-24">
              <div className="text-lg">
                <h2 className="text-5xl font-bold pb-10 mt-10">
                  {data.name.common}
                </h2>

                <p className="m-1">
                  <b>Population: </b> {separator(data.population)}
                </p>
                <p className="m-1">
                  <b>Region: </b> {data.region}
                </p>
                <p className="m-1">
                  <b>Subregion: </b> {data.subregion || "No disponible"}
                </p>
                <p className="m-1">
                  <b>Capital: </b>{" "}
                  {data.capital
                    ? data.capital.length < 2
                      ? data.capital[0]
                      : data.capital.map((element) => {
                          return ` ${element} |`;
                        })
                    : "No hay capital"}
                </p>
              </div>

              <div className="mt-32 text-lg pl-3">
                <p className="m-1">
                  {" "}
                  <b>Languages:</b>{" "}
                  {data.languages
                    ? Object.values(data.languages).map(
                        (element) => `${element} `
                      )
                    : "No hay language"}
                </p>

                <p className="m-1">
                  {" "}
                  <b>Curriencies:</b>{" "}
                  {data.currencies
                    ? Object.values(data.currencies).map((element) => {
                        return `${element.name}`;
                      })
                    : "No hay"}
                </p>

                <p className="m-1">
                  <b>Top Level Domain:</b>
                  {data.tld
                    ? Object.values(data.tld).map((el) => ` ${el}`)
                    : "No hay"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoCard;
