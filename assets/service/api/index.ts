import {session} from "service";
import {useMemo} from "react";


useMemo(() => session.setSession(), [])
export default {
};