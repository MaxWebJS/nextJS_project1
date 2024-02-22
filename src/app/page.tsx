// import Image from "next/image";

// export default function Home() {
// 	return <main>Hello!</main>;
// }

// type Time = {
// datetime: string;
// };

// async function getTime(): Promise<Time> {
async function getTime() {
	const res = await fetch(
		"https://worldtimeapi.org/api/timezone/Europe/Moscow"
		// { cache: "no-store" }
		// { next: { revalidate: 13 } }
	);
	// Log information about caching
	console.log("Response headers:", res.headers); // Log the response headers including caching information

	const resJSON = res.json();
	// console.log(typeof res);
	// console.log(resJSON);
	// return res.json();
	return res.headers;
}

const Bits = async () => {
	// const [time] = await Promise.all([getTime()]);
	const [HeadersList] = await Promise.all([getTime()]);
	// console.log(time);
	// return <h2>{time.datetime}</h2>;
	return <h2>{HeadersList}</h2>;
};

export default Bits;
