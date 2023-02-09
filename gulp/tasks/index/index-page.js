"use strict";

import {
    paths
} from "../../../gulpfile.babel";

import gulp from "gulp";
import consolidate from "gulp-consolidate";
import browsersync from "browser-sync";
import yaml from "require-yaml";

gulp.task("list-pages", async function () {
    delete require.cache[require.resolve("../../../" + paths.views.pagelist)];
    var pages = require("../../../" + paths.views.pagelist);
    return gulp
        .src(__dirname + "/index.html")
        .pipe(
            consolidate("lodash", {
                pages: pages,
            })
        )
        .pipe(gulp.dest(paths.views.dist))
        .on("end", browsersync.reload);
});
