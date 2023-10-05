import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import Integration from "../../features/communication";

function Communication() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Communication Platforms" }));
  });

  return <Integration />;
}

export default Communication;
