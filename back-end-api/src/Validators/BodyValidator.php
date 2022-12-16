<?php

namespace Src\Validators;

/**
 * Input validator
 */
class BodyValidator
{
    public static function Validate($input)
    {
        if (!isset($input['title'])) {
            return false;
        }
        if (!isset($input['rating'])) {
            return false;
        }
        if (!isset($input['review'])) {
            return false;
        }
        if (!isset($input['last_played'])) {
            return false;
        }
        return true;
    }
}