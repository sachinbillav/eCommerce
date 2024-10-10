import RestaurantsList from "./RestaurantsList";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

function Restaurants(props) {
    
    const { code, name, location, type, opensAt, closesAt, RestaurantImage,domain, ratings } = props;
    console.log("ratings",ratings)
    return (
        <div className="card">
            <img src={`${domain}/media/${RestaurantImage}`} />
            <div className="card-content">
                <table>
                    <tr  className="ratingId">
                        <td><h4 className="card-title">{name}</h4></td>
                        <td>
                            <Box className="custom-box" component="fieldset" mb={3} borderColor="transparent">
                                <Rating name="read-only" value={ratings} readOnly  sx={{ fontSize: '0.9rem' }}/>
                            </Box>
                        </td>
                    </tr>
                <tr>
                    <td><p className="card-description">{location}</p></td>
                    <td><span className="card-description">{type==0 ? <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nO2XwUoDQQyG56be1KMVH8OJTWSvfQq1+g4iFfEoQpPaB7H2Naqox1a8qXdb6r2SrR6LdXd2Zkvnh8DC7sB8m0nmjzFRUVFRpRQITcoUZmkBTGBBBAgsiBlYpgwAw+ZeC4+BsWuZBiD4paHPlvHOMtXpijZKBwAMa7ZJ58A0+rsl4hCEGrrGlAGgel3dskz3/+3rlukZb3AnKMBuO9m2Qh+ZLyjGd2CoBAFIjw3jY+5blukhuUxWvQNYwQtXNsEKnnkF0G4zX8HOGzic1Z0KAsATd5unaRaa+0c+AbrOAYQ63gCs0KtzAKaBPwDGsXsAHC80ADCNvAGA4EsBNdD3BqDGrIAM3HoEoLp7ADzwe5FNXaWrAv5MWsm6N4Cf9w2HGTjNuo/MAGrA1IjlL17sBTFz6TcMldQSZwbAN50n8u4j/0Aj2Mvw55+CDzS/0iOglniewtaC1TNfa9dWXO8j90K1xOoq0wFeqK83dhr6LNQBwcNZ3aYUAEUIIkBgQczAomcAShJm6QCioqKijA99A3yCPIRsuFUZAAAAAElFTkSuQmCC"/> : <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nO3ZTW8bRRgH8HwTAwJB21Q4DSSuExoHZJeAXF4ECA6E1xMtcGu/Q0FCIhEHiBCvIlx6QoIDH4ADSJWoBIqcJl7v7Puu351yetAzzqw765lkvDuggDzST4q04+j/35kniZSZmemarun6/63o/MWnw2LFDIsX4WSoNMKl8ppygbBQboSFCpwkQaFsKBcIFsuA+r/dhIM7fw0dMHc4g6QBcxDri/TvNoCeRPeXX2kWpF5g4QlAR4YdKIZNBJWG7fG6vX6M5VEu4D/yOKB/6q3yQQdcWE53iOVRLzC/CujfDtrh9GIsj3IBb64ESMfxi4J2JUE7TGeofYjlUS+QvwDo+Lfan+Ct9qRh22O6HJZHvcDDjwGa+PiJA83tGxBevgp+9RXwFssUfh1euQbR9g1oE0catN3pQqs9juVRLuCeXQakevztIIRw8zNwCxX6uSPhz/XNLWh5gTBsq93hNFud+LPqBWaXAKkcf2u3Dv6Lb9L9k/CeW4fmzu4o6GFYEfYZ5QLOmSKg4+5pq3Yb3NIlujcNt/QMNGu3E4HbEDHNIbZfvcCpAiDpXcWjdgPwnn2V7svCe34dItePw4qwvcoF7IcWAcmGCvkffUL36OB//CkNGjZbI9EI26de4MEFQMmhYvc0MgjY50p0jxbzqxDUTS50EGvG+9QLPPAoINlQBV9u0+c6eV99T8MG4Ti2R7mAdf88IBwo0VC5b71Hn+vkvP0+DetzIortUS9w3zlAooHC+2mvVOlznezVS+AHEcc7xPYoFyD3zgESDRQip4v0uVani3HgmB9SbI96gXvygGRDRU6dp8+1OlOMA7sJbM/EBWRDZV2oai9glap8cC+gHC/IUEA0VEEE9utX9Bd4410aViR1AdlQOZ9/q7/AF9+NQrsB2K4fS11ANlRubQ+s2SV9Bc4ug13b40LrKSAZKuRc39D39j/cHIZ1fLAoj5O6gGyoKNMGsvZS9vBPvQyWQcZC0+DIzlBANlTxPf39DyAL5fQFFipg4fdgQSl3XKYCLhLfTWTd+pO+xYnDV14AcvOWMLCJrJHUBaShk/cUr8D1DbXBnl0G8sEGEMMcBk2ENS2H07Cc9AUsyVAJ7ynaqQHZ+hrI+jtAVqrD39hopQrma5fB3PoGzJ1dadAGQ3gZCiTC2sfcVYU3ah4RtEHsmHGX1AWODapw/OKw4qAGMpOsLAWyBnUmCGpD3bTGNTIU0HH8oqCGJGg9YZ8i6QvoOH7ZWxUF3U8yhtKfwI8/Zz7+SYLuGwT2OCbUf/gpRYFcvqHr7xxtcnn1fzFZufzaiSqRyxtWbu5J5QLTNV3TNfOfWX8DO0hQfmMWjHsAAAAASUVORK5CYII="/>}</span></td>
                </tr>
                <tr>
                    <td><span className="card-description">Opens @ : {opensAt}</span></td>
                    <td><span className="card-description">Closes @ : {closesAt}</span></td>
                </tr>
                </table>
            </div>
        </div>
    );
}

export default Restaurants