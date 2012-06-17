#!/bin/bash
rm keepass-opera.oex
zip -r keepass-opera.oex * -x README.md .git compile.sh *~
