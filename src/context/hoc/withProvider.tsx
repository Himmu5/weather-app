import { ComponentType, Context, useContext } from "react";
import { SearchContext } from "../context";

function WithProvider(provider: Context<any>) {
    function MyHOC(IncomingComponent: ComponentType<any>) {
        function OutgoingComponent(propes: any) {
            const ContextData = useContext(provider);
            return <IncomingComponent {...propes} {...ContextData} />;
        }
        return OutgoingComponent;
    }
    return MyHOC;
}

const withSearch = WithProvider(SearchContext)

export { withSearch }

export default WithProvider;