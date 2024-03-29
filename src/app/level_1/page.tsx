// import Image from "next/image";

// export default function Home() {
// 	return <main>Hello!</main>;
// }

type Time = {
	datetime: string;
};

async function getTime(): Promise<Time> {
	const res = await fetch(
		"https://worldtimeapi.org/api/timezone/Europe/Moscow"
		// { cache: "no-store" }
		// { next: { revalidate: 13 } }
	);
	return res.json();
}

const Bits = async () => {
	// const [time] = await Promise.all([getTime()]);
	const [time] = await Promise.all([getTime()]);
	return <h2>{time.datetime}</h2>;
};

export default Bits;
