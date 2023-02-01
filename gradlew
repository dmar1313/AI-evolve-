#!/usr/bin/env bash

./gradlew clean
./gradlew assembleRelease
./gradlew assembleDebug
./gradlew test
./gradlew build
