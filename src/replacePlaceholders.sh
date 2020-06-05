#!/bin/bash
echo "first arg $1"
echo "Second arg: $2"

sed -i '' "s/$1/$2/g" *
