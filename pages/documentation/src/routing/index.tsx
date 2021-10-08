import React, { Suspense } from "react";
import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { Home } from "./static-pages/Home";
import { Error } from "./static-pages/Error";

export default function Router() {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/error" element={<Error />} />
                <Route path="/docs/:id" element={<h1>Docs</h1>}>
                    <h1>Hello</h1>
                </Route>
            </Routes>
        </Suspense>
    )
}