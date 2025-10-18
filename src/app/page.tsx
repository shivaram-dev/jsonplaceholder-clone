import Banner from "@/components/Banner";
import Resources from "@/components/Resources";
import Routes from "@/components/Routes";
import Testing from "@/components/Testing";
import UseYourOwnData from "@/components/UseYourOwnData";
import WhenToUse from "@/components/WhenToUse";

export default function Home() {
    return (
        <main>
            <Banner />
            <Testing />
            <WhenToUse />
            <Resources />
            <Routes />
            <UseYourOwnData />
        </main>
    );
}
