#!/bin/sh

COMMAND=$1
TYPE=$2
NAME=$3
DIR=`dirname $0`/../..
CREATE_FILE_PATH=$DIR/app/frontend/components/"$NAME".jsx
TEMPLATE_FILE_PATH=`dirname $0`/template
HELP="
==== HELP ===\n
$ react g/generate <TYPE> <NAME>\n
<TYPE>: \n
\t      component  \n
"

if [ "$COMMAND" = "h" ] || [ "$COMMAND" = "help" ] || [ $# -eq 0 ]; then
  echo $HELP
  exit 1;
fi

# 3 arguments
if [ $# -ne 3 ]
then
    echo $HELP;
    exit 1;
fi

if [ "$COMMAND" = "g" -o "$COMMAND" = "generate" ]; then
  if [ "$TYPE" = "component" ]; then
    echo "create frontend/components/$NAME.jsx"
    cp -i $TEMPLATE_FILE_PATH/react/component.jsx $CREATE_FILE_PATH
    perl -pi -e s/NAME/"$NAME"/ $CREATE_FILE_PATH
    exit 1;
  fi

fi
