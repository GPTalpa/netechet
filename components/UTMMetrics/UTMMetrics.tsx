"use client";

import { saveTrackingOnLoad } from "@/utils/utm";
import { useEffect } from "react";

export default function UTMMetrics() {
  useEffect(() => {
    saveTrackingOnLoad();
  }, []);
  return <></>;
}
