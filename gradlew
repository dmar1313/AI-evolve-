#!/usr/bin/env bash

./gradlew assembleRelease
./gradlew assembleDebug
./gradlew test
./gradlew clean
./gradlew build
